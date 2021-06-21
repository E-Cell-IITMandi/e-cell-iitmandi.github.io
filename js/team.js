var data = YAML.load('data/team.yaml');
var divtag = document.getElementById("team");

// Position to be replaced
for (pos in data) {
  var id = pos.split(" ")[0]
  if (!id) {
    id = "Others"
  }
  var names = Object.keys(data[pos]);
  var container = document.createElement("section"); //Create section tag for each position
  container.id = pos
  {
    var con = document.createElement("div")
    con.className = "con-1";
    {
      var head = document.createElement("div");
      head.className = "heading";
      {
        var h2 = document.createElement("h2");
        h2.className = "heading-36";
        var position = document.createTextNode(pos)
        h2.appendChild(position)
        head.appendChild(h2)
      }
      con.appendChild(head)
      var members = document.createElement("div");
      members.className = "members";
      {
        for (var i = 0; i < names.length; i++) {
          var person = document.createElement("div");
          person.className = "person";
          {
            var person_details = document.createElement("div");
            person_details.className = person_details;
            {
              var img = document.createElement("img");
              img.className = "person_photo";
              img.src = data[pos][names[i]]['img'];//to be changed
              person_details.appendChild(img);

              var per_name = document.createElement("p");
              per_name.className = "person_name";
              var text = document.createTextNode(data[pos][names[i]]['name']);
              per_name.appendChild(text);
              person_details.appendChild(per_name);

              var social = document.createElement("ul")
              social.className = "person_social_media";
              {
                var facebook_li = document.createElement("li");
                {
                  var facebook_link = document.createElement("a");
                  facebook_link.href = data[pos][names[i]]['fb'];
                  {
                    var facebook_icon = document.createElement("i");
                    facebook_icon.className = "fa fa-facebook";
                    facebook_link.appendChild(facebook_icon);
                  }
                  facebook_li.appendChild(facebook_link);
                }
                social.appendChild(facebook_li);
                // For linkedin
                var link_li = document.createElement("li");
                {
                  var link_link = document.createElement("a");
                  link_link.href = data[pos][names[i]]['linkedin'];
                  {
                    var link_icon = document.createElement("i");
                    link_icon.className = "fa fa-linkedin";
                    link_link.appendChild(link_icon);
                  }
                  link_li.appendChild(link_link);
                }
                social.appendChild(link_li);
              }
              person_details.appendChild(social);
            }
            person.appendChild(person_details);
          }
          members.appendChild(person)
        }
      }
      con.appendChild(members)
    }
    container.appendChild(con)
  }
  divtag.appendChild(container)
}
