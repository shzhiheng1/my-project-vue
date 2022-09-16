module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  collectCoverage:true,
  collectCoverageFrom:['src/views/*.vue'] //我只做components目录下vue文件测试
}
