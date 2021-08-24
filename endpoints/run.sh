#!/bin/bash

kubectl create -f external-service.yaml
kubectl create -f external-service-endpoints.yaml

# to test run...
# kc exec kubia-tlf7x -it -- curl -s -k https://10.108.149.97/index.html
