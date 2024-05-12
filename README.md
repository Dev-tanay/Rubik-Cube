
# Rubik-Cube

This project is a virtual Rubik's Cube implemented using HTML, CSS, and JavaScript. It provides a web-based interface for users to interact with and solve a Rubik's Cube puzzle.


## Description

The Rubik-Cube is a classic three-dimensional puzzle that has challenged and entertained people for decades. This project brings the experience of solving a Rubik's Cube to the digital realm, allowing users to manipulate the cube's faces and solve it through a web browser.
## Run Locally

Clone the project

```bash
  https://github.com/Dev-tanay/Rubik-Cube.git
```

Go to the project directory

```bash
  cd Rubik-Cube
```
Click on the index.html 


## Run locally using Docker

### Prerequisites:
1. Docker installed on your local machine.
2. Basic understanding of Docker concepts such as containers, images, and Dockerfiles.
3. Familiarity with Docker commands for building and running containers.

## Building Docker image

Clone the repository to your local machine.
``` bash
https://github.com/Dev-tanay/Rubik-Cube.git
```
Navigate to the root directory of the project

``` bash
cd Rubik-Cube
```
Open a terminal or command prompt.
Run the following command to build the Docker image:

```bash
docker build -t rubik-cube:latest .
```
## Running Docker Container

Run the following command to start a Docker container from the image:

``` bash
docker run -d -p 8080:80 rubik-cube:latest
```
Access the Rubik's Cube application by opening a web browser and navigating to :

``` link
http://localhost:8080
```



### Link :
https://dev-tanay.github.io/Rubik-Cube/
