set :stage, :production
server 'rails-app-7vwfh22i.cloudapp.net', user: 'deploy', roles: %w{app db web}, primary: true
set :server_name, 'rails-app-7vwfh22i.cloudapp.net' # this is for nginx.conf
set :full_app_name, "#{fetch(:application)}"#_#{fetch(:stage)}"
set :deploy_to, "/home/#{fetch(:deploy_user)}/apps/#{fetch(:full_app_name)}"
set :rails_env, :production
set :unicorn_worker_count, 5
set :enable_ssl, false