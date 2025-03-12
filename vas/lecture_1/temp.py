import requests
import json
from datetime import datetime

url = "https://api.lu.ma/public/v1/calendar/list-events"

headers = {
    "accept": "application/json",
    "x-luma-api-key": "secret-Du1DtefEcdXTalKLLiXmV7aYq",
}

response = requests.get(url, headers=headers)
events = response.json()

# Open a file to write the events
with open("events.txt", "w", encoding="utf-8") as f:
    # Extract and format specific fields for each event
    for event in events["entries"]:
        event = event["event"]
        start_time = datetime.fromisoformat(event["start_at"].replace("Z", "+00:00"))
        formatted_datetime = start_time.strftime(
            "%B %d, %Y at %I:%M %p"
        )  # Month, day, year and time

        # Write event in markdown format
        f.write(f"## {event['name']}\n")
        f.write(f"**Date & Time:** {formatted_datetime}\n")
        f.write(f"**Link:** {event['url']}\n\n")
        f.write(f"{event['description']}\n\n")
        f.write("---\n\n")
