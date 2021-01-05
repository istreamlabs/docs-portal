module.exports = {
  someSidebar: [
    {
      Guide: [
        'guide/index',
        'guide/client',
        'guide/create-channel',
        'guide/channel-ops',
        {
          "Advanced": [
            "guide/concepts/auth",
            "guide/concepts/contenttypes",
            "guide/concepts/linking"
          ]
        }
      ],
    },
    {
      'API Reference': ['reference/streaming'],
    },
    "cli",
    {
      'Download SDKs': ['sdks/javascript', 'sdks/golang', 'sdks/python'],
    },
  ],
};
