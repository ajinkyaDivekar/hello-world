if [ $NODE_ENV == "production" ]
then
   echo 'Log: Docker entrypoint to live...'
   cp ./.env.live ./.env
else
   echo 'Log: Docker entrypoint to staging...'
   cp ./.env.stage ./.env
fi
npm run build