module "sox_db" {
  source = "./modules/database"

  db_name = "sox_compliance_store"
}

module "compliance_cache" {
  source = "./modules/redis"

  cluster_mode = false
}

module "audit_monitoring" {
  source = "./modules/monitoring"

  retention_days = 2555 # 7 years retention for SOX
}

resource "kubernetes_namespace" "sox_ops" {
  metadata {
    name = "sox-controls"
    labels = {
      "compliance.ops/managed" = "true"
    }
  }
}

resource "kubernetes_config_map" "sox_configs" {
  metadata {
    name      = "sox-itgc-global-configs"
    namespace = kubernetes_namespace.sox_ops.metadata[0].name
  }

  data = {
    "audit-year"           = "2026"
    "retention-policy"     = "P7Y"
    "sox-readiness"        = "high"
    "control-eval-freq"    = "continuous"
  }
}
