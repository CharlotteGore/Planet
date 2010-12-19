prefix    = File.dirname( __FILE__)

# Directory variables
client_src   = File.join( prefix, 'src/client-javascript' )
server_src   = File.join( prefix, 'src/server-javascript' )
compass_dir		 = File.join( prefix, 'support/sass' )

build_dir = File.join( prefix, 'build' )
test_dir  = File.join( prefix, 'spec' )

# A different destination directory can be set by
# setting DIST_DIR before calling rake
client_dist_dir  = ENV['DIST_DIR'] || File.join( prefix, 'public/client-javascript' )
server_dist_dir = prefix

client_files = %w{client}.map { |js| File.join( client_src, "#{js}.js" ) }
server_files = %w{server}.map { |js| File.join( server_src, "#{js}.js" ) }

# Output files/dirs

client_app         = File.join( client_dist_dir, "node-experiments.js" )
client_app_min     = File.join( client_dist_dir, "node-experiments.min.js" )

server_app         = File.join( prefix, "server.js" )

# General Variables
date       = `git log -1`[/^Date:\s+(.+)$/, 1]
version    = File.read( File.join( prefix, 'version.txt' ) ).strip

# Build tools
rhino      = "java -jar #{build_dir}/js.jar"
minfier    = "java -jar #{build_dir}/google-compiler-20100917.jar"
compass    = "compass compile #{compass_dir}"

# Turn off output other than needed from `sh` and file commands
verbose(false) 

# Tasks
task :default => "all"

desc "Builds Client and Server application"
task :all => [:client, :server, :sass] do
  puts "Build complete."
end

desc "Builds client-side Javascript, JSLint checks, Compiles"
task :client => [:merge_client, :lint_client, :min] do
  puts "Client-size Javascript built."
end

desc "Builds server-size Javascript, JSLint checks"
task :server => [:merge_server, :lint_server] do
  puts "Build complete."
end

desc "Builds client application"
task :merge_client => [client_app]

desc "Builds server application"
task :merge_server => [server_app]

desc "Builds a minified version of node-experiments.js"
task :min => client_app_min

desc "Compiles SCSS files into css stylesheets"
task :sass do
	puts "Compiling scss files into stylesheets"
	sh "#{compass}"
end

desc "Removes dist folder"
task :clean do
  puts "Removing Distribution directory: #{client_dist_dir} and server.js" 
  rm_rf client_dist_dir
  rm_f "server.js"
end

desc "Tests client-side javascript against JSlint"
task :lint_client => client_app do
  puts "Checking application against JSLint..."
  sh "#{rhino} " + File.join(build_dir, 'jslint-check-client.js')
end

desc "Tests server-side javascript against JSlint"
task :lint_server => server_app do
  puts "Checking application against JSLint..."
  sh "#{rhino} " + File.join(build_dir, 'jslint-check-server.js')
end


# File and Directory Dependencies
directory client_dist_dir

file client_app => [client_dist_dir, client_files].flatten do
  puts "Building node-experiments.js..."
  
  File.open(client_app, 'w') do |f|
    f.write cat(client_files).gsub(/(Date:.)/, "\\1#{date}" ).gsub(/@VERSION/, version)
  end

end

file client_app_min => client_app do
  puts "Building node-experiments.min.js..."

  sh "#{minfier} --js #{client_app} --js_output_file #{client_app_min}"
end

def cat( files )
  files.map do |file|
    File.read(file)
  end.join('')
end

file server_app => [server_dist_dir, server_files].flatten do
	puts "Building server.js..."
	
	File.open(server_app, 'w') do |f|
		f.write cat(server_files).gsub(/(Date:.)/, "\\1#{date}" ).gsub(/@VERSION/, version)
  	end
end
