import test from 'ava';
import sinon from 'sinon';
import ki from '..';

const spy = sinon.spy(ki, 'getTree');

test('a', t => {
  ki(['a']);
  t.truthy(spy.getCall(0).args[0], ['a']);
  t.truthy(spy.returnValues[0], {a: null});
});

test('a.b', t => {
  ki(['a.b']);
  t.truthy(spy.getCall(0).args[0], ['a.b']);
  t.truthy(spy.returnValues[0], {a: {b: null}});
});
