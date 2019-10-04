# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

##  tweets テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|auto_increment|
|text|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|created_at|date|null: false, foreign_key: true|
|updated_at|date|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

## edit account テーブル
|Column|Type|Options|
|------|----|-------|
|name|string||null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

## log in テーブル
|Column|Type|Options|
|------|----|-------|
|email|varchar|null: false, foreign_key: true|
|password|char|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user