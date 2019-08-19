## install dependencies

### local install of of command-line library markdown-to-json
clone the ODI's fork of markdown-to-json: https://github.com/theodi/markdown-to-json

```cd markdown-to-json```

#### Set up virtual environment
    python3 -m venv py3venv
    source py3venv/bin/activate
    pip install --upgrade pip

#### local install
```./setup.py install```

### j2cli
```brew install j2cli```

## copy template file
```cp pattern-template.j2 $path_to_markdown-to-json_dir```

## Usage
```sh markdown-to-pattern-template.sh Test\ doc.md```
