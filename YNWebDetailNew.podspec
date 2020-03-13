
Pod::Spec.new do |s|
  s.name             = 'YNWebDetailNew'
  s.version          = '0.1.0'
  s.summary          = 'A short description of YNWebDetailNew.'
  s.description      = <<-DESC
TODO: Add long description of the pod here.
                       DESC
  s.homepage         = 'https://github.com/yanazhangabc/YNWebDetailNew'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'yanazhangabc' => 'yanazhangabc@126.com' }
  s.source           = { :git => 'https://github.com/yanazhangabc/YNWebDetailNew.git', :tag => s.version.to_s }
  s.ios.deployment_target = '8.0'
  s.source_files = 'YNWebDetailNew/Classes/**/*'
end
