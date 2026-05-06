const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VW21LbSBD9l3lNV3a65+6qVK0xxoblDiG34kFYYyOwZUWSDSbFv2/1yJA87GZZv1gaS91nTp9zxj9EuSya+FfciN4PUdXFOmsjX7abKoqe2FlNp7EWIPKszUTvGyoLJBWgCeADoNKA2gGiA7SAwQEqB0pCCEAGAZUC0hJIOSCjgIxO1+gsEAJ6A0QW0BlAi0DaA0oDKgAacKprQPr6GUS1upkXk99g8w7IpdeNAQJNwKicBiKXQBsLaBUosI47GAteAmpKyPhbIyCDlQQGUxXlQBtAhqgJvAaUgNJdPzOgrKiLcjasbuMi1tn8r7g5zYr6jURqnbAh90RiSIycAI0DDBosgjVAaACZFMauETQgM4sK0GpQBKmOtoCSAD1Pwif8XAIZr0fAYAGNBOfexGPgCt3owpYQ7RI3jniFtALrE7kUUmMiDYRMjuRl5ZlenjiXse51rIQBkCuwgkKaMQsKpU6ENsWsjPl+Hsu2aDdv1mSqHjoxKkp6ImaFm5ABRARnE6+8yluiTnzOgFXAikw4fcJF0oJL+jU6vetZsUwyOA/aQfBvYpH54u1RB8RQ8gwiWALnuGrQiRBuSJKJ1OlxJVNbi+B9ZwpithTwZJlwg8B2CRKQLRgCT8PRLxSe1i+Ovv8/mrSaZUjkk+4VmO2EGR9bmPubTk2hg2V8MqnUQDoAJSsRkAUXOkJZFDx0jgHpIRCPgisFDZ7eRCTXICWh86QHhiA7ZoMEMp1fkTywlBznDQ/dsn2U5ImlAArg2O4phDjEOJxcGgi6rb+CefU285i1q/r3FmYlu2Rfnk/q69LYiHA72869aMDqtG9mBY0BzwQCKuRECQqMYkr4ziYb+QDbzPGpqHMggYiS+1iPJFMNxemkkmhsAGtBderwlrdsbcpjDgP/kjfEUKzqcpdl5Zi9ZNz0Fsc570TxdO7jZj8XPXwGUcdZ0bR11hbLMq0ZEFm+voiTOrZJbqKZrMzHk6cv9W1bDdeP72IdmzoO+mfVaOf72PRXZ/vv9FDeL86bDwJEVS8nsWliPi6adllvjmLTZLPYiN63axBlfGw7IXM3hSCmRd20H8tVNV9m+YvKX37MJpPlqmwvNuVkwBexFj35czm2bVHOGh7nqszqyW2xjoPbrG1Eb5rNm/i6wVjHXPTaehVfE36wzHn+cpcOPh2dagFikXRR5KIngnZWEklpqEf+z+b9A1fNqup9GVsBYp6e0kjek/Q6eB88P8jrz6/4uFwe26yYN6InBqerYXOgh8PDQrkjPxr1z2b9wawvfu7nRZ8d8eXl+ns5G+cXu6OlNTPp7WzxdS+/u5Gni53P65PJ2fj7x89Xl6Oh/PAPRURPrEe7Lnu8O54dXg0G/bD3xzg8nG6Ob28+hS8Hj8N672Z6Mlmd7F7sVg+3tiq+Lob1ebidL1d2b+/yK46OZVHuYrzcm84He5dXOuLhoP+Bu+VxXUzir812NsMVVodPF6XJpv0vS+mqp+918ZC/GzTjo/FyMdb750/2+Oaur0bHuZ0NBsuRuskP7s4nh4f6OJTlp537u8+L+fH53bq5mj9ufJ+bvTh3vj1EiiQmnhTfTouYkrDMeH7/ObkON+tLPsMvJbbR+i+pYNJJY0J3aBgPmNLAEehtJrJlDYHpvMxLnAvsecfHTgp/lyKv8zYfEMgnfirJ5zk68Jw36UR/vgZRzbN2uqwXoieyMq+XRS5A1MsVa36/nC5/968JCDyfLX5r+XnWtP2fZrosFrFps0Uleuicl1Yr9CAWm35VXbRZ++JB0efP+KgSz38DaHNzsFUKAAA=",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "Silva MD",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "254700143167",
    OWNER_NAME:            process.env.OWNER_NAME || "Silva MD",
    DESCRIPTION:           process.env.DESCRIPTION || "Silva MD Bot",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Silva MD is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Silva MD",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'SILVA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'silva').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
    INSTAGRAM_SESSION:     process.env.INSTAGRAM_SESSION || '',
};
