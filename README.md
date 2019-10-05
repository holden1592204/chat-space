# README

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false|
### Association
- belongs_to :user
- belongs_to :group
- has_many :groups

## users テーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
### Association
- has_many :groups, through:  :groups_users
- has_many :tweets

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :tweets
- has_many :groups_users
- has_many  :users, through:  :groups_users


## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|image|string||
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user