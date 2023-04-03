#include <vector>
using namespace std;

struct ColorRGB {
  int r;
  int g;
  int b;
};

struct Picture {
  int width;
  int height;

  vector<vector<ColorRGB>> pixels;

  Picture() {}
  Picture(int width, int height, vector<vector<ColorRGB>> &pixels)
      : width(width), height(height), pixels(pixels) {}

  ColorRGB Pixel(int w, int h) { return pixels[h][w]; }

  Picture Crop(int left_top_x, int left_top_y, int right_bottom_x,
               int right_bottom_y) {
    Picture picture;
    picture.width = right_bottom_y - left_top_y + 1;
    picture.height = right_bottom_x - left_top_x + 1;

    vector<vector<ColorRGB>> crop_pixels(picture.height,
                                         vector<ColorRGB>(picture.width));

    for (int i = left_top_x; i <= right_bottom_x; i++) {
      for (int j = left_top_y; j <= right_bottom_y; j++) {
        crop_pixels[i - left_top_x][j - left_top_y] = pixels[i][j];
      }
    }
    picture.pixels = crop_pixels;

    return picture;
  }
};