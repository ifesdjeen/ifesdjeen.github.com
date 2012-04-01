#!/usr/bin/env ruby

def rgb(red, green, blue)
  16 + (red * 36) + (green * 6) + blue
end

def gray(g)
  232 + g
end

def set_color(fg, bg)
  print "\x1b[38;5;#{fg}m" if fg
  print "\x1b[48;5;#{bg}m" if bg
end

def reset_color
  print "\x1b[0m"
end

def print_color(txt, fg, bg)
  set_color(fg, bg)
  print txt
  reset_color
end

# convenience method
def rgb_cube
  for green in 0..5 do
    for red in 0..5 do
      for blue in 0..5 do
        yield [red, green, blue]
      end
      print " "
    end
    puts
  end
end

# color cube
# print "Color cube, 6x6x6:\n"

(1..100).to_a.each do |i|
  Integer(`tput lines`).times do (Integer(`tput cols`)/2).times do print_color("  ", nil, rgb(i, i, i)) end end
end
