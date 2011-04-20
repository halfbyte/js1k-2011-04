require 'rubygems'
require 'bundler/setup'

require 'closure-compiler'

task :default => [:build, :stats]

task :build => ["compressed.js", "compressed_uglify.js"]

file "compressed.js" => "src.js" do
  closure = Closure::Compiler.new(:compilation_level => 'ADVANCED_OPTIMIZATIONS')
  File.open('compressed.js', 'w') do |f|
    f.write closure.compile(File.open('src.js', 'r'))
  end
end
file "compressed_uglify.js" => "src.js" do
  sh("uglifyjs src.js >compressed_uglify.js")
end
desc "outputting stats"
task :stats do
  puts "original: " + File.size("src.js").to_s
  puts "closure : " + File.size("compressed.js").to_s
  puts "uglify : " + File.size("compressed_uglify.js").to_s
end