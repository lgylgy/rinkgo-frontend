#!/bin/bash

mkdir -p ./src/app/proto

OUT_DIR="./src/app/proto"
PROTOC_GEN_TS_PATH="$(cygpath -m ${PWD})/node_modules/.bin/protoc-gen-ts.cmd"

echo "Compile pstat Service"
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    -I proto proto/pstat.proto