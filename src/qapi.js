export default {
	"pages": {
		"root": {
			"id": "root",
			"pageUrl": "root",
			"name": "root",
			"children": [
				"6013d39210485c001e656941",
				"6013d39210485c001e656943",
				"6013d5b09af38b0022e531c9",
				"6013d66af9d679001eab02c8"
			]
		},
		"6013d39210485c001e656941": {
			"id": "6013d39210485c001e656941",
			"name": "404",
			"pageUrl": "404"
		},
		"6013d39210485c001e656943": {
			"id": "6013d39210485c001e656943",
			"name": "index",
			"pageUrl": "index",
			"customCode": {
				"6013d3fe25c8595c70000167": {
					"name": "script",
					"place": "endOfHead",
					"tag": "script",
					"data": {
						"content": "alert(\"Это indexалерт\")",
						"async": true
					}
				}
			}
		},
		"6013d5b09af38b0022e531c9": {
			"id": "6013d5b09af38b0022e531c9",
			"pageUrl": "one-more-page",
			"name": "one more page"
		},
		"6013d66af9d679001eab02c8": {
			"id": "6013d66af9d679001eab02c8",
			"pageUrl": "da-da-eshe-odna-stranica",
			"name": "да да еще одна страница ",
			"customCode": {
				"6013d70b445c4731a0a0a554": {
					"name": "meta",
					"place": "endOfHead",
					"tag": "meta",
					"data": {
						"charset": "",
						"name": "keywords",
						"content": "важные слова "
					}
				},
				"6013d728147580fa2256f4a3": {
					"name": "script",
					"place": "endOfBody",
					"tag": "script",
					"data": {
						"async": true,
						"content": "console.log(\"Последняя страница\")"
					}
				}
			}
		}
	},
	"mode": "production",
	"projectType": "create-react-app",
	"site": {
		"styles": {},
		"seo": {}
	}
}