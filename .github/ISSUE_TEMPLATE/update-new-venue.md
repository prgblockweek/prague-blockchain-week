---
name: Update/New Venue
about: Ask us to update or add a new event location to the Berlin Blockchain Week website
title: "[NEW]: "
labels: new
assignees: ''

---

Please use this template to suggest a new event location or update an existing one for the BBW website! You can also directly [submit your event as a pull request](https://github.com/blockchainweek/data/tree/main/data/24/places) to this repository. This will speed up things significantly!

```toml
# name of the venue
name = "Example Venue"

# type of the event
#  available types (you can choose more):
#   * meetup
#   * conference
#   * hackathon
#   * expo
#   * party
#   * other
eventTypes = ["conference", "hackathon"]

# max number of attendees
capacity = 350

# Street address
address = "Lohmuehlenstraße 65, 12435 Berlin"

# OSM/Google Maps URL
mapUrl = "https://nominatim.openstreetmap.org/ui/search.html?q=Lohmuehlenstra%C3%9Fe+65+12435+Berlin"

# Venue Description
description = '''
Example Venue is an ecosystem of over 3,500 members from more than 70 nations located on two campuses – Fantasy Park and Utopia Mitte.
'''

# Venue Photo or Logo
photo = "photo.jpg"

# Venue Link
[links]
web = "https://example.com/spaces/"
```
