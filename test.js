import test from 'ava';
import fn from './';

test('must return the nightly node version', async t => {
	var versions = await fn();
  t.is(/nightly/.test(versions['linux-x86'].version), true);
});
