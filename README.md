# gql-boilerplate
A simple code that returns back a dynamic short url from a long url.

payload
```
mutation{
  urlShortner(url: {url: "http://google.com/kkkdkdkdkccdkdkdqdddl/kdkdkkdkdddd/ddkdkdd"}){
    oldurl
    newurl
  }
}
```
result
```
{
  "data": {
    "urlShortner": {
      "oldurl": "http://google.com/kkkdkdkdkccdkdkdqdddl/kdkdkkdkdddd/ddkdkdd",
      "newurl": "https://google.com/z7x1ijw2w7b"
    }
  }
}
```
some level of error checking was also done which checks to see if theurl has been generated before.

how to run
```
run yarn 
install docker
run prisma deploy
run yarn run start:dev
```
