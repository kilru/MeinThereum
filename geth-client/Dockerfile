FROM ethereum/client-go

ARG ACCOUNT_PASSWORD

COPY genesis.json .

COPY keystore /root/.ethereum/keystore

RUN geth init ./genesis.json \ 
        && rm -f ~/.ethereum/geth/nodekey \
        && echo ${ACCOUNT_PASSWORD} > password.txt
    
ENTRYPOINT ["geth"]