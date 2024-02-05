#!/usr/bin/env bash

find "./data/24" -type f -name "*.png" -print | while read file
do
   cwebp -quiet -q 80 "$file" -o "${file%.*}.op.webp"
   cwebp -quiet -q 80 -resize 150 0 "$file" -o "${file%.*}-150px.op.webp"
   cwebp -quiet -q 80 -resize 300 0 "$file" -o "${file%.*}-300px.op.webp"
   cwebp -quiet -q 80 -resize 500 0 "$file" -o "${file%.*}-500px.op.webp"
done

find "./data/24" -type f -name "*.jpg" -print | while read file
do
   cwebp -quiet -q 80 "$file" -o "${file%.*}.op.webp"
   cwebp -quiet -q 80 -resize 150 0 "$file" -o "${file%.*}-150px.op.webp"
   cwebp -quiet -q 80 -resize 300 0 "$file" -o "${file%.*}-300px.op.webp"
   cwebp -quiet -q 80 -resize 500 0 "$file" -o "${file%.*}-500px.op.webp"
done
