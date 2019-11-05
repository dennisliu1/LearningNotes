# Docker Basics
## Docker Concepts

### What is an Image?
An executable package containing everything you need to run an application.
- codebase
- runtime
- libraries
- environment variables
- configuration files

### What is a Container?
A virtual operating system that shares the kernel with the host machine with other containers.

### What is a Virtual Machine?
A full blown "guest" operating system with virtual access to host resources through a hypervisor.

### What are the benefits of using containers?
Docker uses containers to serve up images.
- Flexible
- Lightweight
- Portable
- Scalable
- Stackable

### What is the differences between Containers and Virtual Machines?
Containers share the Host OS and infrastructure.
VMs creates it's own OS and uses a hypervisor to access the infastructure.

# Container Basics
## Creating and using containers
### How do you create an image?
You want to create a Dockerfile, which defines the image.
There are Dockerfile Registries that host Images you can use as bases for your own images.
The best example is Docker Hub.

### As an example, how would you create and run an Nginx server container?
1. Find Nginx on Docker Hub
2. run it with the docker command
docker container run --publish 80:80 --detach --name my_nginx <nginx image name>

### docker command structure?
docker <command> <subcommand> or 
docker <command>

### Docker container commands?
docker container run --detach --name <id> <image>
docker container ls -a
docker container stop <id>
docker container logs <id>
docker container top <id>
docker container rm -f (force) <IDs>

### What happens when a container runs?


# Image Basics
# Persistent Data
# Docker Compose
# Docker Swarm