
module.exports = {
	src_folders: [ "tests" ],
	detailed_output: true,
	page_objects_path: [ 'pages' ],
	custom_commands_path: [ 'commands' ],
	webdriver: {
		start_process: true,
		server_path: 'node_modules/.bin/chromedriver',
		port: 9515
	},


	test_settings: {
		default: {
			screenshots: {
				enabled: true,
				on_failure: true,
				on_error: false,
				path: 'screenshots'
			},
			launch_url: 'http://the-internet.herokuapp.com',
			desiredCapabilities: {
				browserName: "chrome"
			}
		}
	}
}
