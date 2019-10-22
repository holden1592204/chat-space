json.content @message.content
json.image_url @message.image_url
json.id @message.id
json.time @message.created_at.to_i
json.user_name @message.user.name