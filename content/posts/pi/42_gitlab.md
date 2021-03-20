https://github.com/apk8s/k3s-gitlab

```
sudo kubectl apply -f gl_namespace.yml -n gitlab
```

```
sudo kubectl apply -f gl_services.yml -n gitlab
service/gitlab created
service/gitlab-ssh created
```

```
sudo kubectl apply -f gl_lh_volv_pvc.yml -n gitlab
persistentvolumeclaim/gl-lh-volv-config created
persistentvolumeclaim/gl-lh-volv-logs created
persistentvolumeclaim/gl-lh-volv-data created
persistentvolumeclaim/gl-lh-volv-reg created
persistentvolumeclaim/gl-lh-volv-uploads created

```

```
sudo kubectl apply -f gl_deployment.yml -n gitlab
deployment.apps/gitlab created
```


