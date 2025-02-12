it("css modules localIdentName with hash", () => {
	const style = require("./index.css");
	expect(style).toEqual({
		"#": "fc447ab087ae4cd2",
		"##": "dbf7dec709dc91bf",
		"#.#.#": "cc4339f697f296fd",
		"#fake-id": "_03bab14767df4a09",
		"++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.":
			"_1660593a9befbf18",
		"-a-b-c-": "_8c4e413e84912131",
		"-a0-34a___f": "d9bf8c877b33acd5",
		".": "aead2153db133cf1",
		123: "fef7e737d53ff9c2",
		"1a2b3c": "ef035065ca097021",
		":)": "_6aa3aa81c291dabb",
		":`(": "f34c19907e9e59a6",
		":hover": "fcd17b8681f1b63a",
		":hover:focus:active": "f27145a89a4d1a00",
		"<><<<>><>": "d7d8ab14bea1c14d",
		"<p>": "d2767284152c3a6e",
		"?": "_8da5839788e75b3f",
		"@": "_35470ed502bd8715",
		"B&W?": "_7896e21b99c3bd42",
		"[attr=value]": "_89fdf6af8cb592f9",
		_: "_4accb3ed4cdeb7c2",
		_test: "_83d259ee80ab7290",
		className: "_0ee1b7cbc170f67e",
		"f!o!o": "_7aa8f596bc38da8c",
		"f'o'o": "_07d6cc43d89b1860",
		"f*o*o": "be419885662a1f5d",
		"f+o+o": "_959e3cdbcde16d48",
		"f/o/o": "_5951fbfcdbec1db3",
		"f\\o\\o": "_9806c8f947aa64c7",
		"foo.bar": "_30bc5fda9ceca999",
		"foo/bar": "_0683ab0c4075135c",
		"foo/bar/baz": "_83e2f7e3f17cfc12",
		"foo\\bar": "dd93a6e33969a1a2",
		"foo\\bar\\baz": "_3331694d4af7650f",
		"f~o~o": "_89ddc803f9e999e5",
		"m_x_@": "ed946a6e604d60d3",
		someId: "_34a721bb277b66cd",
		subClass: "_66643173a1cb7d49",
		test: "_9092e0257c128e96",
		"{}": "_588a2b683d4c0b81",
		"©": "f11ba6a60c7b1431",
		"“‘’”": "_3e722d45dd417853",
		"⌘⌥": "_808767daf9865f13",
		"☺☃": "c1a328b3913ed8cc",
		"♥": "ebc66938c1eee366",
		"𝄞♪♩♫♬": "ae98eaecf7f0c41e",
		"💩": "a19919e10df7e469",
		"😍": "_25f2d363f97e2cf1"
	});
});
