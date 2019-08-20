## install dependencies

### Set up virtual environment
    python3 -m venv py3venv
    source py3venv/bin/activate
    pip install --upgrade pip

### local install of of command-line library markdown-to-json
clone the ODI's fork of markdown-to-json: https://github.com/theodi/markdown-to-json

```cd markdown-to-json```

```./setup.py install```

### j2cli
```pip install j2cli```

### jq
```brew install jq```

## copy template file
```cp pattern-template.j2 $path_to_markdown-to-json_dir```

## Usage
```sh markdown-to-pattern-template.sh Test\ doc.md```
