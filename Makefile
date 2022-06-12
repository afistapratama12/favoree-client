CFLAGS=-g
export CFLAGS
deploy:
	yarn build
	netlify deploy --prod
push:
	git add -A
	git commit -m "$(COMMIT)"
	git push origin main