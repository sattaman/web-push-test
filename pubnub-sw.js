self.window = self;

importScripts('https://cdn.pubnub.com/sdk/javascript/pubnub.4.30.0-beta.0.js');
  
var pubnub = new PubNub({
  subscribeKey: 'sub-c-06ec80f0-1db0-11ea-b278-86076a99d5da'
});

pubnub.addListener({
  message: function({ message }) {
      console.log('handle messaage', message);
      this.notifyMe(message.text)
    // handle message
  },
  presence: function(presenceEvent) {
    console.log('handle presence', presenceEvent);
      // handle presence
  },
  notifyMe: function(message) { 
    console.log('notifyMe', message)
    if (message === undefined) return;
    self.registration.showNotification("test");
  }
})

pubnub.subscribe({
  channels: ['ch1']
});
