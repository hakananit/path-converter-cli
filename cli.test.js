const cli = require('./index');

test('should return platforms', () => {
  expect(cli.isWindows()).not.toBeNull();
});

test('path char length should be shorter than 260', () => {
  expect(
    cli.isPathLengthSafe(
      'AydgzIHJc6xiuDW8ThZImNddcCqVhLyE7GDdP1GUtWVLLB14lvCX4A8ja2xn8uaaDidVr5X9L4eW22yFHYccHyvHOTAHzZzgaflLGRZ29bXBClxGqURGwEZDevMzZ5KHKN55aSkyWXA8UYm68WcvnQePa25XUBK6M6TOF7P6GpOjRIIS3AXVs4JJiZ9dsWBgYRcm4IifvYCr1kelhqzYdHiHMZeJUYsQjdb0jGfs6RtjLITSAASjeRZ1FzN06DBoaeH'
    )
  ).toBeTruthy();
});

test('should convert forward slash to backslash', () => {
  expect(cli.replaceSlashForwardToBackward('foo/bar')).toBe('foo\\bar');
});

test('should convert backward slash to forward slash', () => {
  expect(cli.replaceSlashBackwardToForward('foo\\bar')).toBe('foo/bar');
});
