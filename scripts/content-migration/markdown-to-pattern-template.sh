#!/bin/bash
INPUT_MD_FILE=$1

output_filename () {
  FILENAME=$(echo $* | tr '[:upper:]' '[:lower:]' | sed -e 's/ /_/g')
  echo $FILENAME".md"
}

#loop through the keys (=pattern names), copy the pattern name to the json body, and then for each pattern send the json to j2 command, creating a file for each
MD_TOJSON=$(md_to_json "$INPUT_MD_FILE")
printf '%s' "$MD_TOJSON" | jq -r 'keys[]' | while read key ; do
    printf '%s' "$MD_TOJSON" \
    | jq --arg PATTERN_NAME "$key" 'to_entries | map_values(.value + { Name: .key }) | map(select(.Name|startswith($PATTERN_NAME))) | .[0]' \
    | j2 --format=json pattern-template.j2 > outputs/$(output_filename "$key")
done
