K6 is a loadtest util.
Run K6 using Docker:
    Go to the samples folder (where you have the script)
    cd samples
    Run the below command:
        docker run --rm -i grafana/k6 run - <script.js
        Note: script.js is pass as input (<) in command line.  Since its a container.
        e.g.
            docker run --rm -i grafana/k6 run - <hello.js
        hello.js is a script file.
    Adding more Virtual Users: (concurrent request)
        docker run --rm -i grafana/k6 run --vus 10 --duration 30s - <hello.js
