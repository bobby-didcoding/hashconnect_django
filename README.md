# Using [HashConnect](https://www.hashpack.app/hashconnect) in a Django/React project
This project has been developed to help you implement HashConnect into a Django/React project.

This is a [Dockerized](https://www.docker.com/) app that uses the following stack:
- Hedera [JAVA SDK](https://docs.hedera.com/guides/docs/sdks) with a [python wrapper](https://pypi.org/project/hedera-sdk-py/)
- [Django web framework](https://www.djangoproject.com/)
- [React](https://reactjs.org/docs/getting-started.html)
- [HashConnect](https://www.hashpack.app/hashconnect)

>Note: I built the project based on these tutorials/repos:
    1 - https://github.com/jaycoolslm/hashconnect-pair-wallet: Created by [Jay cool](https://www.youtube.com/channel/UCp2YLlFmXMlMgX8JIqIhzfg), please check out his tutorials
    2 - https://github.com/linkedweb/auth-site: Created by [Bryan Dunn](https://www.youtube.com/channel/UCf_Y89gbkB1bJGkmqiQIAnQ). Again, check out his channel....Great content.
    3 - ...I did the rest :)

***
***

## Prerequisites
* [Hedera](https://hedera.com/) credentials. You can sign up [here](https://portal.hedera.com/register).
> Please use testnet credentials!
* [Docker & Docker Compose](https://docs.docker.com/desktop/)
* [Hashpack wallet](https://www.youtube.com/watch?v=xI2SfLUJGkQ)
* [Gmail with app password](https://www.youtube.com/watch?v=69hdhCUCaGk)


***
***

## Repository
Clone or pull from the main branch before you begin coding. Download the zip file if you do not have a GitHub Account.
```
#option 1 - SSH
git clone git@github.com:bobby-didcoding/hashconnect_django.git .

#option 2 - Github CLI
gh repo clone bobby-didcoding/hashconnect_django .

#option 3 - HTTPS
git clone https://github.com/bobby-didcoding/hashconnect_django.git .
```

***
***

## Environment variable and secrets
1. Create a .env file from .env.template
```
copy .env.template .env
cd backend
copy .env.template .env
mkdir static
cd ..
cd frontend
copy .env.template .env
```

2. Update your new .env file in backend with OPERATOR_ID (Public key), OPERATOR_KEY (Secret key), DONOT_REPLY_EMAIL (Your google email) and GOOGLE_APP_PASSWORD Your [google app password](https://www.youtube.com/watch?v=69hdhCUCaGk)
```
export OPERATOR_ID=***User your credentials***
export OPERATOR_KEY=***User your credentials***
export DONOT_REPLY_EMAIL=**Your email**
export GOOGLE_APP_PASSWORD=**Your google app password**
```

***
***

## Fire up Docker:

>Note: You will need to make sure Docker is running on your machine!

Use the following command to build the docker images:
> Note: this command will create the Docker containers and configure everything you need to get started.
```
docker-compose up -d --build
```

### Access
You should now be up and running!

* Your database instances are accessible at [http://localhost:5050](http://localhost:5050)
>Note: You can connect to the database in [PGAdmin](http://localhost:5050). service name is 'pg_db'. database name, username and passwords are all 'hashconnect' as default.

* The web app is running on  [http://localhost:8000](http://localhost:8000)
* The built in admin page can be found on [http://localhost:8000/admin](http://localhost:8000/admin)

***
***

