#!/bin/bash
docpad clean && docpad generate
scp -r out/* jsmtladmin@js-montreal.org:~/js-montreal.org/public