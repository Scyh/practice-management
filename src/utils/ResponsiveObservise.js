import enquire from 'enquire.js';

export const responsiableMap = {
  mobile: '(max-width: 556px)',
  desktop: '(min-width: 557px)'
};

let subscribes = [];
let uid = 0;
let screen = {};

const ResponsiveObservise = {
  subscribe(callback)  {
    if(uid === 0) {
      this.register()
    }
    const id = ++uid;
    subscribes.push({
      id,
      callback
    });
    
    callback(screen);

    return id;
  },
  unsubscribe(id) {
    this.unregister(id)
  },
  register() {
    Object.keys(responsiableMap).forEach(breakpoint => {
      enquire.register(responsiableMap[breakpoint], {
        match: () => {
          screen = {
            [breakpoint]: true
          };

          this.dispatch(screen);
        },
        unmatch: () => {},
        destroy: () => {},
      })
    })
  },
  unregister: (id) => {
    subscribes = subscribes.filter(i => i.id !== id)
    if(subscribes.length === 0) {
      Object.keys(responsiableMap).forEach(breakpoint => {
        enquire.unregister(responsiableMap[breakpoint])
      })
    }
  },
  dispatch: () => {
    subscribes.forEach(item => item.callback(screen))
  }
};

export default ResponsiveObservise;