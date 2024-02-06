---
name: Update/New Event
about: Ask us to update or add a new event to the Berlin Blockchain Week website
title: "[NEW]: "
labels: new
assignees: ''

---

Please use this template to suggest a new event or update an existing event for the BBW website! You can also directly [submit your event as a pull request](https://github.com/blockchainweek/data/tree/main/data/24/events) to this repository. This will speed up things significantly!

```toml
# the name of your event
name = "Example Event 2024"

# shortest possible name (without year)
shortname = "Example"

# type of the event
#  available types (you can choose more):
#   * meetup
#   * conference
#   * hackathon
#   * expo
#   * party
#   * other
types = ["meetup"]

# status of the event
#  available types:
#   * idea
#   * planning
#   * published
status = "planning"

# the name of the group organizing the event
org = "Example place"

# the github handle of the directly responsible individual for this event
# (this person will coordinate with #bbw24 organizers)
dri = "john007"

# A point of contact (responsible person)
poc = "John Appleseed"

# the start date of the event
date = "2024-05-23"

# how many days the event lasts (1 - N)
days = 3

# the event times (shows up in the event card)
times = "09:00-20:00"

# Link to venues from the Places table - use this OR enter venueName, venueUrl and venueAddress
# venues = ["gabriel-loci"]

# the event venue name
venueName = "Example venue"

# link to the venue on google maps
venueUrl = "https://goo.gl/maps/example"

# the event venue address
venueAddress = "118 Holland St, Somerville, MA 02144"

# the languages in which the event will take place (you can choose more)
languages = ["english"]

# the max number of attendees of the event
attendees = 600

# blockchains that the event deals with
# if it is an interchain event, then leave blank
chains = ["ethereum", "polkadot"]

# tags for the event, will show up as labels.
# pick 1-4
tags = ["solarpunk", "cryptography"]

# A logo attachment
logo = "logo.png"

# a description of the event.
description = """
Lorem ipsum ...
"""

[cfp]
# link to call for particioation
link = "https://example.com/speaker"

[registration]
# type of registration
#  Possible values:
#   * tickets
#   * invites
#   * signup
type = "tickets"

# price of the ticket
price = "100 EUR"

# link to the registration or ticket purchase page
link = "https://example.org/tickets"

# custom action button label
#button = "Buy tickets!"

# status of registrations
#  Possible values:
#   * available
#   * sold-out
#   * closed
status = "available"

[links]
# the website of the event
# make sure to have all the relevant information: dates, venue, program, ticketing (if any), etc.
web = "https://example.org/"

# twitter account
twitter = "https://twitter.com/ExampleConf"

# public telegram group
telegram = "https://t.me/example"

# docs
#docs = "https://example.org/docs"

# discord
discord = "https://discord.com/invite/AsDf1337"
```
