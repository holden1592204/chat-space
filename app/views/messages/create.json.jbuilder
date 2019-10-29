json.(@messages, :content, :image)
json.created_at @messages.created_at
json.user_name @messages.user.name
json.id @messages.id