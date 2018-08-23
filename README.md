
[![Build Status](https://travis-ci.org/myricoi/StackOverflow_Lite.svg?branch=feature%2Fcreate-api)](https://travis-ci.org/myricoi/StackOverflow_Lite)[![Test Coverage](https://api.codeclimate.com/v1/badges/d85dfd3d2d0db750d695/test_coverage)](https://codeclimate.com/github/myricoi/StackOverflow_Lite/test_coverage)


**StackOverflow_lite Web Application**

StackOverflow-lite is an online platform where people can ask questions and provide answers. At minimum, it has the following features:

a) Users can create an account and log in.

b) Users can post questions.

c) Users can delete the questions they post.

d) Users can post answers.

e) Users can view the answers to questions.

f) Users can accept an answer out of all the answers to his/her question as the preferred answer. 

g) Users can upvote or downvote an answer.

h) Users can comment on an answer.

i) Users can fetch all questions he/she has ever asked on the platform

j) Users can search for questions on the platform

j) Users can view questions with the most answers.


 The development notes and stories can be accessed using the
 
link https://www.pivotaltracker.com/n/projects/2189407

The api Endpoints are hosted on heroku and can be accessed using the link https://dixon-stackoverflow-lite.herokuapp.com/
Add the 'api/v1' to the root to access documentation and usage of the endpoints or simply use the link https://dixon-stackoverflow-lite.herokuapp.com/api/v1/.Here, a web document is provided breaking down usage of each endpoint.

**How to test the endpoints using postman**
-copy the root link provided above and paste it on postman requests bar.
-follow the documentation provided at https://dixon-stackoverflow-lite.herokuapp.com/api/v1/ to check each endpoint

**Running tests locally**
- >>git clone https://github.com/myricoi/StackOverflow_Lite myproject
- >>cd myproject
- >>python3 -m venv venv /python -m venv venv (linix/windows respectively)
- >> . venv/bin/activate or venv\scripts\activate (linux or windows respectively)
- >>pip install -r requirements.txt
- >>pip install pytest
- >>pytest




