#!/bin/bash

curl --include --request POST "tic-tac-toe-wdi.herokuapp.com/games" \
  --header "Content-type: application/json" \
--data '{
  "game": {
    "id": 3,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": null
  }
}'

echo
