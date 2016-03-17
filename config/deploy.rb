set :application, 'threadly'
set :repo_url, 'https://github.com/lestex/threadly.git'
set :branch, 'master'

set :deploy_user, 'deploy'

set :rbenv_type, :user
set :rbenv_ruby, '2.3.0'

set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
set :linked_files, %w{config/database.yml config/secrets.yml}

# Default value for linked_dirs is []
set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

# array of config files in config/deploy/shared
set(:config_files, %w(
  nginx.conf
  database.yml
  unicorn.rb
  unicorn_init.sh
  secrets.yml
))

# files needed to be executable
set(:executable_config_files, %w(
  unicorn_init.sh
))

set(:symlinks, [
  {
    source: "nginx.conf",
    link: "/etc/nginx/sites-enabled/#{fetch(:application)}"    
  },
  {
    source: "unicorn_init.sh",
    link: "/etc/init.d/unicorn_#{fetch(:application)}"
  }
])

namespace :deploy do
  
  # copy config files to server
  before :deploy, 'deploy:setup_config'

  # remove default virtual host nginx
  before 'deploy:setup_config', 'nginx:remove_default_vhost'

  after 'deploy:setup_config', 'nginx:reload'

  after :deploy, 'unicorn:restart'

end