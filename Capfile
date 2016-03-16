# Load DSL and Setup Up Stages
require 'capistrano/setup'
 
# Includes default deployment tasks
require 'capistrano/deploy'
 
require 'capistrano/rbenv'
require 'capistrano/bundler'
require 'capistrano/rails/assets'
require 'capistrano/rails/migrations'
#require 'capistrano/cookbook'
#require 'capistrano/nginx_unicorn'
 
# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }
Dir.glob('lib/capistrano/tasks/*.cap').each { |r| import r }
Dir.glob('lib/capistrano/**/*.rb').each { |r| import r }
