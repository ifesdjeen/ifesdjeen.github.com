watch('_layouts/haml/default.html.haml') {
  puts "Regenerating"
  system "./generate_css_and_html.sh"
}
watch('css/sass/main.sass') {
  puts "Regenerating"
  system "./generate_css_and_html.sh"
}
