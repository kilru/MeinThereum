FROM gcr.io/license-place/mein-geth

ARG NODEKEY
ARG NETWORK_ID
ARG NETWORK_PORT

CMD ["geth", "--nodekeyhex=${NODEKEY}", "--ipcdisable", "--networkid=${NETWORK_ID}", "--port=${NETWORK_PORT}"]