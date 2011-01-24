
require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

prefix    = File.dirname( __FILE__)

# Directory variables
client_src   = File.join( prefix, 'src/client-javascript' )


build_dir = File.join( prefix, 'build' )

test_dir  = File.join( prefix, 'spec' )

# A different destination directory can be set by
# setting DIST_DIR before calling rake
client_dist_dir  = ENV['DIST_DIR'] || File.join( prefix, 'dist' )
client_debug_dir  = ENV['DEBUG_DIR'] || File.join( prefix, 'debug' )

# The source files (in the order they are to be merged)
client_files = %w{intro line path box outro}.map { |js| File.join( client_src, "#{js}.js" ) }

puts client_files

# Output files/dirs
client_app         = File.join( client_debug_dir, "planet.js" )
client_app_min     = File.join( client_dist_dir, "planet.min.js" )

# General Variables
date       = `git log -1`[/^Date:\s+(.+)$/, 1]
version    = File.read( File.join( prefix, 'version.txt' ) ).strip

# Build tools
rhino      = "java -jar #{build_dir}/js.jar"
minfier    = "java -jar #{build_dir}/google-compiler-20100917.jar "

# Turn off output other than needed from `sh` and file commands
verbose(false) 

# Tasks
task :default => "all"

desc "Builds Client and Server application"
task :all => [:client] do
  puts "Build complete."
end

desc "Builds client-side Javascript, JSLint checks, Compiles"
task :client => [:merge_client, :lint_client, :min] do
  puts "Client-size Javascript built."
end

desc "Builds client application"
task :merge_client => [client_app]

desc "Builds a minified version of planet.js"
task :min => client_app_min

desc "Removes dist folder"
task :clean do
  puts "Removing Distribution directory: #{client_dist_dir}" 
  rm_rf client_dist_dir
  rm_rf client_debug_dir
end

desc "Tests client-side javascript against JSlint"
task :lint_client => client_app do
  puts "Checking application against JSLint..."
  sh "#{rhino} " + File.join(build_dir, 'jslint-check-client.js')
end

# File and Directory Dependencies
directory client_debug_dir

file client_app => [client_debug_dir, client_files].flatten do
  puts "Building planet.js..."
  
  File.open(client_app, 'w') do |f|
    f.write cat(client_files).gsub(/(Date:.)/, "\\1#{date}" ).gsub(/@VERSION/, version)
  end

end

file client_app_min => client_app do
  puts "Building planet.min.js..."

  sh "#{minfier} --js #{client_app} --js_output_file #{client_app_min}"
end

def cat( files )
  files.map do |file|
    File.read(file)
  end.join('')
end
