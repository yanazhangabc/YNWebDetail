
Pod::Spec.new do |s|
  s.name             = 'YNWebDetail'
  s.version          = '0.1.0'
  s.summary          = 'My YNWebDetail.'
  s.description      = <<-DESC
Load local html local js local css A short description of YNWebDetail Yana
                       DESC
  s.homepage         = 'https://github.com/yanazhangabc/YNWebDetail'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'yanazhangabc' => 'yanazhangabc@126.com' }
  s.source           = { :git => 'https://github.com/yanazhangabc/YNWebDetail.git', :tag => s.version.to_s }
  s.ios.deployment_target = '8.0'
  s.source_files = 'YNWebDetailNew/Classes/**/*'
end
