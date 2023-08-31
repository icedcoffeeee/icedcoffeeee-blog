import urllib.request
import json
import urllib

data = []

# change to yours VideoID or change url inparams
VideoID = "B3GUux9O8Jg", "gzqBCgi1Qjg"

for id in VideoID:
    params = {"format": "json", "url": "https://www.youtube.com/watch?v=%s" % id}
    url = "https://www.youtube.com/oembed"
    query_string = urllib.parse.urlencode(params)
    url = url + "?" + query_string

    with urllib.request.urlopen(url) as response:
        response_text = response.read()
        dic = json.loads(response_text.decode())
        dic.update({"video_url": params["url"]})
        data += [dic]

with open("./app/components/vid_data.json", "w") as out:
    json.dump(data, out)
