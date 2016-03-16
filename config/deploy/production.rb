# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:
#set :stage, :production
server '46.101.109.129', user: 'deploy', roles: %w{app db web}, primary: true

# server 'example.com', user: 'deploy', roles: %w{app web}, other_property: :other_value
# server 'db.example.com', user: 'deploy', roles: %w{db}
set :stage, :production

set :branch, 'master'

set :deploy_user, 'deploy'

set :server_name, '46.101.109.129'

set :full_app_name, "#{fetch(:application)}"#_#{fetch(:stage)}"

set :deploy_to, "/home/#{fetch(:deploy_user)}/applications/#{fetch(:full_app_name)}"

set :rails_env, :production

set :unicorn_worker_count, 5

set :enable_ssl, false