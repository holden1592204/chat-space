# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :group

## group_tweets テーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :tweets

## edit_account テーブル
|Column|Type|Options|
|------|----|-------|
|name|string||null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

## log_in テーブル
|Column|Type|Options|
|------|----|-------|
|email|varchar|null: false, foreign_key: true|
|password|char|null: false, foreign_key: true|

