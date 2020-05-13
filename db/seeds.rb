# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'

User.destroy_all
Post.destroy_all
Like.destroy_all
Follow.destroy_all

demo_user = User.create!(email: "guest@guest.com", password: "hunter2", username: "Guest")
user1 = User.create!(email: "example1@example.com", password: "hunter2", username: "AlwaysNerdyPersona")
user2 = User.create!(email: "example2@example.com", password: "hunter2", username: "FriedFritters")
user3= User.create!(email: "example3@example.com", password: "hunter2", username: "ImportantObservationTrash")
user4= User.create!(email: "example4@example.com", password: "hunter2", username: "ScreechingSweetsMusic")
user5= User.create!(email: "example5@example.com", password: "hunter2", username: "BeardedTragedyCollector")
user6= User.create!(email: "example6@example.com", password: "hunter2", username: "ShootingStarrrrr")
user7= User.create!(email: "example7@example.com", password: "hunter2", username: "FadingPhantomColor")
user8= User.create!(email: "example8@example.com", password: "hunter2", username: "DeepestObservationTurtle")
user9= User.create!(email: "example9@example.com", password: "hunter2", username: "GreenCucumber")
user10= User.create!(email: "example10@example.com", password: "hunter2", username: "PhonesForever")


users = [demo_user, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]



#quote 
12.times do
  user = users.sample
  Post.create(
    quote: Faker::Quotes::Shakespeare.romeo_and_juliet_quote,
    source: "Shakespeare Anonymous",
    author: user,
    post_type: "quote"
  )
end

  Post.create(
    quote: Faker::Quotes::Shakespeare.romeo_and_juliet_quote,
    source: "Shakespeare Anonymous",
    author: demo_user,
    post_type: "quote"
  )

#link

links = ["https://www.youtube.com", "https://www.soundcloud.com", "https://www.spotify.com",
        "https://www.cnn.com", "https://www.msnbc.com", "https://www.katespade.com"]

8.times do
  user = users.sample
  Post.create(
    link: links.sample,
    author: user, 
    post_type: "link"
  )
end

#audio

audio_links = ["https://soundcloud.com/liluzivert/silly-watch", "https://www.youtube.com/user/rihanna",
                "https://www.youtube.com/results?search_query=npr+tiny+desk+concert+mac+miller", "https://www.youtube.com/watch?v=ferZnZ0_rSM",
                "https://www.youtube.com/watch?v=nsM_d4eb3XM"]


6.times do
  user = users.sample
  Post.create(
    link: audio_links.sample,
    author: user, 
    post_type: "audio"
  )
end


#text

text_title = ["My thoughts", "Tomorrow will be good because", "Grateful!"]
text_content=["I like petting salamanders", "Love reading about kangaroos!", "Talking on the phone with my bestie is amazing!"]

  
6.times do
  user = users.sample
  Post.create(
    title: text_title.sample,
    content: text_content.sample,
    author: user, 
    post_type: "text"
  )
end

#photo

photo1 = open('https://thought-bubble-seeds.s3.amazonaws.com/kay.inkdrawing29.jpg')
photo2 = open('https://thought-bubble-seeds.s3.amazonaws.com/photo-1500322969630-a26ab6eb64cc.jpg')
photo3 = open ('https://thought-bubble-seeds.s3.amazonaws.com/b99604162166ede3dba2dd9ab08cda82.jpg')

photopost1 = Post.create(author: user2,  post_type: "photo")
photopost2 = Post.create(author: demo_user, post_type: "photo")
photopost3 = Post.create(author: user1,  post_type: "photo")

photopost1.photo.attach(io: photo1, filename: 'kay.inkdrawing29.jpg')
photopost2.photo.attach(io: photo2, filename: 'photo-1500322969630-a26ab6eb64cc.jpg')
photopost3.photo.attach(io: photo3, filename: 'b99604162166ede3dba2dd9ab08cda82.jpg')

