# Receipt processor challenge
This is my submission for Fetch's coding challenge.

## Docker setup
Clone the repository.

```
gh repo clone sam-parkinson/fetch-challenge
```

Then, run the docker build command in your repository, replacing the username and app name with your preference for both.

```
docker build -t $USERNAME/receipt-processor .
```

Copy the image ID, and paste it at the end of the docker run command, swapping in the port you'd prefer to forward to the container for $PORT.

```
docker run -p $PORT:8000 $IMAGE_ID
```

Alternately, the docker image can be found at: https://hub.docker.com/r/parkinsonsp/fetch-challenge
